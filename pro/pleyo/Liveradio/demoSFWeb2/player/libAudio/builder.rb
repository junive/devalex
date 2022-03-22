#!/usr/bin/ruby
arg = ARGV[0]
lib_base = File.basename(arg)
lib_skel = lib_base + '.skel'
lib_name = lib_base + '.js'
return_value = 0

puts 'Entering ' + File.dirname(arg)
current_dir = Dir.pwd
Dir.chdir File.dirname(arg)
  
File.unlink lib_name if File.exists?(lib_name)
lib = File.open(lib_name, 'w')
skel = File.open(lib_skel)

puts 'building ' + lib_name + ' in ' + Dir.pwd

begin
  skel.each{ |input_file|
    input_file.strip!
    puts "\tincluding " + input_file 
    File.open(input_file).each{ |line|
      lib.print line
    }.close
  }
rescue
	puts "**** FATAL *****: exception caught"
  return_value = -1
ensure
  lib.close
  puts 'Leaving ' + Dir.pwd
  Dir.chdir current_dir
  return_value
end
