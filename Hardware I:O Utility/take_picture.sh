#!/bin/bash

# Fetch updated time over the internet

# Record date taken by photo
DATE=$(date +"%Y-%m-%d_%H%M")

# If /home/pi/temp_photos doesn't exist, create it


# Take photo
raspistill -vf -hf -o /home/pi/temp_photos/$DATE.jpg