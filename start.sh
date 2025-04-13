#!/bin/bash

# Install dependencies
bundle install

# Start the application in development mode with auto-reloading
bundle exec rerun 'ruby app.rb -o 0.0.0.0'
