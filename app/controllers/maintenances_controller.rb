class MaintenancesController < ApplicationController
     
    def index
        render json: Maintenance.all, status: :ok
    end

end
