require 'sinatra'
require 'sinatra/reloader' if development?

# Set the public folder
set :public_folder, File.dirname(__FILE__) + '/public'

# Route for the home page
get '/' do
  erb :index
end

# Start the server if this file is run directly
if __FILE__ == $0
  Sinatra::Application.run!
end
