class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user= User.find_by!(id: params[:id])
        user.update(username: params[:username], password: params[:password])
        render json: user, status: :accepted
    end

    def destroy
        user = User.find_by!(id: params[:id])
        user.destroy
        render json:{}, status: :no_content
    end


    private

    def user_params
        params.permit :username, :password
    end

    def not_found_response
        render json: {error: "User was not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
