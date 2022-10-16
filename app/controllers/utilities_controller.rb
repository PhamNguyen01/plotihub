class UtilitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: Utility.all, status: :ok
    end

    def show
        utility = Utility.find_by!(id: params[:id])
        render json: utility, status: :ok
    end

    def create 
        utility = Utility.create!(utility_params)
        render json: utility, status: :created
    end

    def update
        utility = Utility.find_by!(id: params[:id])
        utility.update(utility_item: params[:utility_item])
        render json: utility, status: :accepted
    end

    def destroy
        utility = Utility.find_by!(id: params[:id])
        utility.destroy
        render json:{}, status: :no_content
    end



    private

    def utility_params
        params.permit(:utility_item, :date)
    end

    def not_found_response
        render json: {error: "Utility record not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
