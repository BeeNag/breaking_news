# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Article.create([{ headline: 'Ruby', body: 'Ruby is a great programming language' }, 
    { headline: 'JavaScript', body: 'JavaScript adds Jazz Hands to a website' },
    { headline: 'Java', body: 'Java technology allows you to work and play in a secure computing environment. ' },
    { headline: 'PHP', body: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.' },
    { headline: 'Python', body: 'Python is a programming language that lets you work quickly
and integrate systems more effectively.' },
    { headline: 'C#', body: 'C# (pronounced as see sharp) is a multi-paradigm programming language.' },])