class PaymentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: Payment.all, status: :ok
    end

    def show
        payment = Payment.find_by!(id: params[:id])
        render json: payment, status: :ok
    end

    def create 
        payment = Payment.create!(payment_params)
        render json: payment, status: :created
    end

    def update
        payment= Payment.find_by!(id: params[:id])
        payment.update(paid_amount: params[:paid_amount], tenant_name: params[:tenant_name], date: params[:date], status: params[:status],)
        render json: payment, status: :accepted
    end

    def destroy
        payment=Payment.find_by!(id: params[:id])
        payment.destroy
        render json:{}, status: :no_content
    end



    private

    def payment_params
        params.permit(:user_id, :tenant_id, :tenant_name, :paid_amount, :payment_number, :item, :unit_name, :date, :status)
    end

    def not_found_response
        render json: {error: "Payment record not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
