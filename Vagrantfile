plugins_dependencies = %w( vagrant-hostmanager vagrant-disksize)
plugin_status = false
plugins_dependencies.each do |plugin_name|
  unless Vagrant.has_plugin? plugin_name
    system("vagrant plugin install #{plugin_name}")
    plugin_status = true
    puts " #{plugin_name}  Dependencies installed"
  end
end

if plugin_status === true
  exec "vagrant #{ARGV.join' '}"
else
  puts "All Plugin Dependencies already installed"
end

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.hostmanager.enabled = true
  config.hostmanager.include_offline = true
  config.hostmanager.manage_host = true
  config.vm.provision :hostmanager

  config.vm.define "minikube" do |c|
    c.vm.hostname = "minikube"
    c.vm.network "private_network", ip: "10.168.10.10"
    c.hostmanager.aliases = %w(dev.minikube prod.minikube dashboard.minikube grafana.minikube)
    c.disksize.size = '50GB'
    c.vm.provision "ansible", playbook: "ansible/full.yml", run: "always"
    c.vm.provider "virtualbox" do |vb|
      vb.memory = "4096"
      vb.cpus = 2
    end
    c.vm.post_up_message = "Please open http://dashboard.minkikube"
  end

end 
