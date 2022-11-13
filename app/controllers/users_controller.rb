# class UsersController < ApplicationController
#     rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
#     rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
#     def index
#         render json: User.all,  status: :ok
#     end

#     # def show
#     #     user = User.find_by(id: params[:id])
#     #     render json: user, status: :ok
#     # end
#     def show
#         @user = User.find_by(id: session[:user_id])
#         if @user
#           render json: @user, status: :ok 
#         else
#           render json: {error: "Unauthorized"}, status: :unauthorized
#         end
    
#    end

#     def create 
#         user = User.create!(user_params)
#         render json: user, status: :created
#     end

#     def update
#         user= User.find_by!(id: params[:id])
#         user.update(username: params[:username], password: params[:password])
#         render json: user, status: :accepted
#     end

#     def destroy
#         user = User.find_by!(id: params[:id])
#         user.destroy
#         render json:{}, status: :no_content
#     end


#     private

#     def user_params
#         params.permit :username, :password
#     end

#     def not_found_response
#         render json: {error: "User was not found"}, status: :not_found
#     end

#     def unprocessable_entity_response(invalid)
#         render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
#     end
# end


class UsersController < ApplicationController

    def index
        render json: User.all,  status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, status: :ok 
        else
          render json: {error: "Unauthorized"}, status: :unauthorized
        end
    
   end

    def create
        user = User.create!(user_params)
        user_session(user.id)
        if user.valid?
           app_response(status_code: 201, message: "Account created succesfully", body: user)
        else
            app_response(status_code: 422, message: "Invalid input", body: user.errors.full_messages)
        end
    end


    def login_user
        user = User.find_by(email: params[:email])
        user_session(user.id)
        if user&.authenticate(params[:password])
            app_response(status_code: 200, message: "Logged in succesfully", body: user, serializer: UserSerializer)
        else
            app_response(status_code: 401, message: "Invalid user_name  or password")
        end
    end

    # def show
    #     user = User.find_by(user_session(user.user_type))
    #     if user
    #         render json: user, status: :created
    #     else
    #         render json: {error: "Not authorized"}, status: :unauthorized
    #     end
    # end

    def logout_user
        delete_user_session
        app_response(status_code: 200, message: "Logged out succesfully")
    end

    def render_404
        not_found
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def  user_session user_id
        session[:user_id] ||= user_id
    end

    def delete_user_session
        session.delete :user_id
    end
end