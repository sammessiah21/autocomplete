class ThingsController < ApplicationController
	def autocomplete
    term = params[:term]
    @things = Thing.where('name LIKE ?', "%#{term}%").pluck(:name)
    render json: @things
    end
end
