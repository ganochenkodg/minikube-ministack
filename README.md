# minikube-ministack 


### description
Simple dev stack with single-node k8s. Used tools:
[Vagrant](https://www.vagrantup.com/) - a tool that lets you create and configure lightweight, reproducible, and portable development environments in different hypervisors.
[Minikube](https://kubernetes.io/ru/docs/tutorials/hello-minikube/) - a tool that lets you use a Kubernetes cluster locally. It lets you create a single node cluster inside a VM on your laptop.

## Setup 

1. Install kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl/)
  * On MacOs: `brew install kubectl`

2. Install minikube ([https://github.com/kubernetes/minikube]()).
  * On MacOs `brew cask install minikube`

3. Add aliases to /ect/hosts for simple access:
  * Determine actual ip with `minikube ip`

### usage
1. [Install Vagrant](https://www.vagrantup.com/docs/installation/)  
2. Clone this repository and run `cd minikube-ministack && vagrant up`. During the launch process, you will be required to enter the root password. After that kubernetes cluster will be raised, with simple nodejs app in [dev](Http://dev.minikube) and [prod](http://prod.minikube) environments.
![](https://github.com/ganochenkodg/minikube-ministack/blob/master/screens/vagrant.png)
3. You can check the status of the cluster and control the Kubernetes through the [dashboard](minikube.dashboard).
4. Each deployed app sends his metrics in [Prometheus](https://prometheus.io/docs/introduction/overview/), for which the dashboard is configured in [Grafana](http://rafana.minikube). Credentials for Grafana is admin:prom-operator and dashboard name is MyApp monitoring.
![](https://github.com/ganochenkodg/minikube-ministack/blob/master/screens/grafana.png)


Tasklist:
- [x] Run minikube
- [x] Run dashboard and ingress.
- [x] Write first app
- [ ] Create CI/CD for deploy it to dev/prod environments.
- [x] Get metrics and visualize it in grafana.
