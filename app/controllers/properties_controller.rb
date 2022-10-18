class PropertiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: Property.all, include:[:user], status: :ok
    end

    def show
        property = Property.find_by!(id: params[:id])
        render json: property, status: :ok
    end

    def create 
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    def update
        property= Property.find_by!(id: params[:id])
        property.update(property_name: params[:property_name])
        render json: property, status: :accepted
    end

    def destroy
        property=Property.find_by!(id: params[:id])
        property.destroy
        render json:{}, status: :no_content
    end



    private

    def property_params
        params.permit(:property_name, :unit_name, :number_of_units, :city, :water_rate, :electricity_rate, :mpesa_paybill)
    end

    def not_found_response
        render json: {error: "property not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
