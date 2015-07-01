# -*- mode: ruby -*-
# vi: set ft=ruby :
#
VAGRANTFILE_API_VERSION = "2"

ENV['VAGRANT_DEFAULT_PROVIDER'] ||= 'docker'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  DOCKER_IMAGE_REPO = "mtbvang"

  # UPDATE these project specific details.
  PROJECT_NAME = "sails-generate-react-gulp"

  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
  end

  config.vm.provision "file", source: "~/.gitconfig", destination: ".gitconfig"
  config.vm.provision "file", source: "~/.ssh/config", destination: ".ssh/config"
  config.vm.provision "file", source: "vagrant/provision/ubuntu/.bash_aliases", destination: ".bash_aliases"
  config.vm.provision "file", source: "vagrant/provision/ubuntu/.bashrc", destination: ".bashrc"

  config.vm.synced_folder "~/code", "/code"
    
  config.vm.define "#{PROJECT_NAME}-app" do |d|
    d.vm.hostname = "#{PROJECT_NAME}.app.local"
    #d.vm.network "forwarded_port", guest: GUEST_APP_PORT, host: FORWARDED_HOST_APP_PORT
    
    d.vm.provision "dotfiles", type: "shell" do |s|
      s.path = "vagrant/provision/ubuntu/dotfiles.sh"
    end
    
    d.vm.provision "provision", type: "shell" do |s|
      s.path = "provision.sh"
    end

    d.vm.provider "docker" do |d|
      d.image   = "#{DOCKER_IMAGE_REPO}/vagrant-node:wheezy"
      d.has_ssh = true
      d.privileged = true
      d.name = "#{PROJECT_NAME}-app"
    end
  end

end
