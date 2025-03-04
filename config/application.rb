require_relative 'boot'

require 'rails/all'
require_relative "../app/middlewares/snake_case_parameters"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Gwaphics
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.middleware.use SnakeCaseParameters

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', 
          headers: :any, 
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end

    # Configurar assets
    config.assets.initialize_on_precompile = true
    config.assets.enabled = true
    
    # Asegurarse que execjs use Node.js
    config.assets.js_compressor = :terser
  end
end

