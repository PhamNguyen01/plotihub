class TenantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: Tenant.all, status: :ok
    end

    def show
        tenant = Tenant.find_by!(id: params[:id])
        render json: tenant, status: :ok
    end

    def create 
        tenant = Tenant.create!(tenant_params)
        render json: tenant, status: :created
    end

    def update
        tenant = Tenant.find_by!(id: params[:id])
        tenant.update(tenant_name: params[:tenant_name])
        render json: tenant, status: :accepted
    end

    def destroy
        tenant = Tenant.find_by!(id: params[:id])
        tenant.destroy
        render json:{}, status: :no_content
    end



    private

    def tenant_params
        params.permit(:tenant_name, :phone_number, :deposit, :balance, :account_number)
    end

    def not_found_response
        render json: {error: "Tenant record not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
