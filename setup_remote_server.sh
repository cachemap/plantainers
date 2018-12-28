# Ensure Python3+ is installed (TODO: Check functionality works)
if [ python3 -v python3 &>/dev/null ] then
    echo "Python 3 is installed"
else
    # Install Python 3 for Linux (TODO: Switch for operating system)
    sudo apt-get install python3.7
fi

# Setup virtual environment
python3 -m venv tutorial-env

# Switch to virtual environment
source tutorial-env/bin/activate

# Install Python modules in virtual environment
pip install aiohttp  # Asynchronous I/O for GPIO control 
pip install aiodns   # Faster DNS resolution for aiohttp
pip install 
