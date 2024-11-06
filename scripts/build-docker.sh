docker build \
  --tag dev-portal/frontend:latest \
  --build-arg CONTAINER_NAME='dev-portal/frontend' \
  --build-arg DESCRIPTION='' \
  --build-arg COMMIT_SHA='1' \
  --build-arg VERSION='0.1.0' \
  .
