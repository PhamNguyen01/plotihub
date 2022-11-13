# class SessionsController < ApplicationController
#   # skip_before_action :authorized, only: :create


#       def create
#         user = User.find_by(username: params[:username])
#         if user&.authenticate(params[:password])
#           session[:user_id] = user.id
#           render json: user, status: :created
#         else
#           render json: { error: "Invalid username or password" }, status: :unauthorized
#         end
#       end
    
#       def destroy
#         if session[:user_id]
#           session.delete :user_id
#         else
#           render json: {error: ["User unauthorized"]}, status: :unauthorized
#         end
#       end




# end
