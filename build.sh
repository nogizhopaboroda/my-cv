docker build  -t cv-builder:latest .

docker run -it -v "${PWD}":/app --cap-add=SYS_ADMIN cv-builder:latest
