class SessionsController < ApplicationController
  # skip_before_action :authorized, only: :create


      def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          app_response(status_code: 200, message: "Logged in succesfully", body: user)
        else
          app_response(status_code: 401, message: "Invalid user_name  or password")
        end
      end
    
      # def destroy
      #   if session[:user_id]
      #     session.delete :user_id
      #   else
      #     render json: {error: ["User unauthorized"]}, status: :unauthorized
      #   end
      # end

    #   def create
    #     user = User.find_by(username: params[:username])
    #     session(user.id)
    #     if user&.authenticate(params[:password])
    #         app_response(status_code: 200, message: "Logged in succesfully", body: user)
    #     else
    #         app_response(status_code: 401, message: "Invalid user_name  or password")
    #     end
    #  end

    # def show
    #     user = User.find_by(user_session(user.user_type))
    #     if user
    #         render json: user, status: :created
    #     else
    #         render json: {error: "Not authorized"}, status: :unauthorized
    #     end
    # end

    def destroy
        delete_session
        app_response(status_code: 200, message: "Logged out succesfully")
    end

    def render_404
        not_found
    end
    private

    def  user_session user_id
      session[:user_id] ||= user_id
    end

    def delete_session
      session.delete :user_id
    end


end
