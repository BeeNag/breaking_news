class Article < ActiveRecord::Base

	validates :headline, :body, presence: true
	
end
