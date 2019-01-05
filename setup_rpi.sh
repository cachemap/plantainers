##
# Update device's system package list
##

#echo 'Updating device's system package list...''
#sudo apt-get update
#sudo apt-get dist-upgrade # Upgrade all installed packages to their latest versions


##
# Install useful system packages
##

# Download and install node.js
#curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
#sudo apt-get install -y nodejs

# Check node was installed correctly
if command node -v &>/dev/null ; then 
	echo 'Node successfully installed!'
else
	echo "Node failed to install properly; exiting..."
	exit
fi