#!/bin/bash

# PocketBase version
VERSION="0.22.14"
# Download URL for the latest PocketBase release
OLD_DOWNLOAD_URL="https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip"
DOWNLOAD_URL="https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_linux_amd64.zip"

# Download directory (change if desired)
DOWNLOAD_DIR="/tmp"
# Extract directory (change if desired)
# EXTRACT_DIR="$HOME/pocketbase"
EXTRACT_DIR="."

echo "Downloading pocketbase ${VERSION} 
from URL: ${DOWNLOAD_URL}"
echo "======================================================"
# download ziiped pocketbase
curl -L -o "${DOWNLOAD_DIR}/pocketbase.zip" "${DOWNLOAD_URL}"
echo "============== pocketbase downloaded ================="
# extract pocketbase
unzip -o -d "${EXTRACT_DIR}" "${DOWNLOAD_DIR}/pocketbase.zip"


