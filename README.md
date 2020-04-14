# Simple Platform
==================

Docker Machine + Ngninx + Prometheus + Grafana to provision on a single host

Maybe you don't need a self-managed kubernetes with 3rd party monitoring solutions, maybe a single docker instance running is enough to hold many of your pet projects

1. Create an account somewhere where you can spin up cheap instances (like on scaleway or digitalocean)

1. Install docker machine if you don't already have it (try docker-machine in your bash)

https://docs.docker.com/machine/install-machine/

1. Provision docker machine on the instance following this guide:

https://docs.docker.com/machine/get-started-cloud/

1. Point your docker to the recently provisioned machine

```bash
eval $(docker-machine env your-machine-name)
```

1. Clone this repo and put everything up

```bash
docker-compose build
docker-compose up -d
```

1. Now you can go to any other of your projects which have a docker file and simply run them on this machine as well, you can follow the example under example-app

```bash
cd example-app
docker-compose build
docker-compose up -d
```

1. If everything worked, go to your server ip address and you should see this:

# It works!

The way it works is by having all containers sharing the same host network, which means that they need to run on different ports to not conflict. Then you can change the nginx config to route traffic corretly to multiple apps according to the domain