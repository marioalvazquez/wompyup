#!/bin/bash
set -e

VIDEOS=(
  "https://cdn.hoyadonde.com/bn1/6f6f7be8-630d-4bdb-9665-3bffc0c6fea3.mp4"
  "https://cdn.hoyadonde.com/bn1/copy_306EBEC0-61DA-470A-A61A-F3E7F53EC76A.mp4"
  "https://cdn.hoyadonde.com/bn1/IMG_4574.mp4"
  "https://cdn.hoyadonde.com/bn1/IMG_3472.mp4"
  "https://cdn.hoyadonde.com/bn1/IMG_3132.mp4"
  "https://cdn.hoyadonde.com/bn1/a7ccd044-1e5c-46b4-bb09-b608f3d3e69f.mp4"
)

for i in "${!VIDEOS[@]}"; do
  URL="${VIDEOS[$i]}"
  OUT="hls-output/video-$i"
  mkdir -p "$OUT"

  echo "Processing video $i: $URL"

  # Detect whether the source has an audio stream
  HAS_AUDIO=$(ffprobe -v error -select_streams a -show_entries stream=codec_type -of csv=p=0 "$URL" 2>/dev/null | head -1)

  if [ -n "$HAS_AUDIO" ]; then
    AUDIO_MAPS="-map 0:a -map 0:a -map 0:a -c:a aac -b:a 96k"
    VAR_STREAM_MAP="v:0,a:0,name:720p v:1,a:1,name:480p v:2,a:2,name:360p"
  else
    AUDIO_MAPS=""
    VAR_STREAM_MAP="v:0,name:720p v:1,name:480p v:2,name:360p"
  fi

  ffmpeg -y -i "$URL" \
    -filter_complex \
      "[0:v]split=3[v1][v2][v3]; \
       [v1]scale=-2:'min(720,ih)'[v1out]; \
       [v2]scale=-2:'min(480,ih)'[v2out]; \
       [v3]scale=-2:'min(360,ih)'[v3out]" \
    -map "[v1out]" -c:v:0 libx264 -crf 22 -preset fast \
    -map "[v2out]" -c:v:1 libx264 -crf 23 -preset fast \
    -map "[v3out]" -c:v:2 libx264 -crf 24 -preset fast \
    $AUDIO_MAPS \
    -f hls \
    -hls_time 4 \
    -hls_playlist_type vod \
    -hls_flags independent_segments \
    -hls_segment_filename "$OUT/seg_%v_%03d.ts" \
    -master_pl_name "playlist.m3u8" \
    -var_stream_map "$VAR_STREAM_MAP" \
    "$OUT/stream_%v.m3u8"

  echo "Done: $OUT/playlist.m3u8"
done

echo ""
echo "All done! Upload each folder in hls-output/ to cdn.hoyadonde.com/bn1/hls/"
echo "Structure expected:"
echo "  cdn.hoyadonde.com/bn1/hls/video-0/playlist.m3u8"
echo "  cdn.hoyadonde.com/bn1/hls/video-1/playlist.m3u8  ..."
