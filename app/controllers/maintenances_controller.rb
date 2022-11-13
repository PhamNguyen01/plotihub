class MaintenancesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: Maintenance.all, status: :ok
    end

    def show
        maintenance = Maintenance.find_by!(id: params[:id])
        render json: maintenance, status: :ok
    end

    def create 
        maintenance = Maintenance.create!(maintenance_params)
        render json: maintenance, status: :created
    end

    def update
        maintenance = Maintenance.find_by!(id: params[:id])
        maintenance.update(status: params[:status])
        render json: maintenance, status: :accepted
    end

    def destroy
        maintenance = Maintenance.find_by!(id: params[:id])
        maintenance.destroy
        render json:{}, status: :no_content
    end



    private

    def maintenance_params
        params.permit(:user_id, :status, :category, :short_summary, :description)
    end

    def not_found_response
        render json: {error: "Maintenance Record not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
