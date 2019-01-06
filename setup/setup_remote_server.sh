# Ensure Python3+ is installed (TODO: Check functionality works)
if [ python3 -v &>/dev/null ] then
    echo 'Python 3 is installed'
else
    # Install Python 3 for Linux (TODO: Switch for operating system)
    echo 'Installing Python...'
    sudo apt-get install python3.7
    if [ python3 -v &/dev/null ]
    	echo 'Python 3 installed!'
	else
		echo 'Python 3 failed to install...'
		exit
	fi
fi

# Set up Python virtual environment
python3 -m venv tutorial-env

# Activate virtual environment
source tutorial-env/bin/activate

# Install Python modules in virtual environment
pip install aiohttp  # Asynchronous I/O for GPIO control 
pip install aiodns   # Faster DNS resolution for aiohttp
#pip install 
