source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.6'  # Cambiado de 3.3.4 a 3.2.6 para coincidir con el Dockerfile

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 8.0.0'
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.5', '>= 1.5.9'
# Use Puma as the app server
gem 'puma', '~> 3.12'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
# gem 'uglifier', '>= 1.3.0'
gem 'terser'
gem 'sprockets', '~> 3.7.2'
gem 'sprockets-rails', require: 'sprockets/railtie'
gem 'shared-mime-info', '~> 0.2.5'
gem 'mime-types', '~> 3.6'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby
gem 'mimemagic', '~> 0.4.3' # Cambia a una versión más reciente
gem 'aws-partitions', '~> 1.1048'
gem 'aws-sdk-core', '~> 3.218', '>= 3.218.1'
gem 'net-imap', '~> 0.5.6'

gem 'ostruct'
gem 'mutex_m'
gem 'bigdecimal' 
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# Additional gems:
gem "jquery-rails"
gem "aws-sdk-s3"
gem 'dotenv', '~> 3.1', '>= 3.1.7'

# Agregar estas gemas
gem 'execjs'
gem 'mini_racer'
gem 'rack-cors'
#gem 'uglifier'


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  # Additional gems:
  gem "annotate"
  gem "pry-rails"
  gem "better_errors"
  gem "binding_of_caller"
  gem 'spring-watcher-listen', '~> 2.0.0'

end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
