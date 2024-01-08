docker images
docker ps -a

# remove all containers and images and volumes and background processes

# docker kill $(docker ps -q)
# docker stop $(docker ps -a -q)
# docker rm $(docker ps -a -q)
# docker rmi $(docker images -q)
# docker volume rm $(docker volume ls -q)

# remove only if exists
if [ "$(docker ps -q)" ]; then
    docker kill $(docker ps -q)
fi
if [ "$(docker ps -a -q)" ]; then
    docker rm -f $(docker ps -a -q)
fi
if [ "$(docker images -q)" ]; then
    docker rmi -f $(docker images -q)
fi
if [ "$(docker volume ls -q)" ]; then
    docker volume rm -f $(docker volume ls -q)
fi


# build docker image
# docker build -t node-postgres-docker-trial .

# run docker image
# docker run -p 3000:3000 -d node-postgres-docker-trial
