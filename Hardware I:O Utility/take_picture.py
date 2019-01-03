import subprocess

# Ensure permission is available to script
subprocess.call(['chmod +x ./take_picture.sh'])

# Take a picture and save to temporary folder
subprocess.call(['./take_picture.sh'])