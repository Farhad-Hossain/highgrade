<!DOCTYPE html>
<html lang="en">
  @include('backend.part._head')
  <body class="app sidebar-mini">
    @include('backend.part._header')
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    @include('backend.part._sidebar')
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Blank Page</h1>
          <p>Start a beautiful journey here</p>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Blank Page</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            @yield('content')
          </div>
        </div>
      </div>
    </main>
    <!-- Essential javascripts for application to work-->
    <script src="{!! asset(BA) !!}/js/jquery-3.3.1.min.js"></script>
    <script src="{!! asset(BA) !!}/js/popper.min.js"></script>
    <script src="{!! asset(BA) !!}/js/bootstrap.min.js"></script>
    <script src="{!! asset(BA) !!}/js/main.js"></script>
    <!-- The javascript plugin to display page loading on top-->
    <script src="{!! asset(BA) !!}/js/plugins/pace.min.js"></script>
    <!-- Page specific javascripts-->
    @yield('custom_js')

    <script type="text/javascript">
        $(".link").click( function(event){
            event.preventDefault();
            
            target_link = $(this).attr('href');

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            url = target_link;
            
            $.ajax({
               type:'GET',
               url: url,

               success:function(data){
                 console.log(data);
                 $("#content").empty();
                 $("#content").append( data );
               }

            })

      });
    </script>
    <!-- Google analytics script-->
  </body>
</html>
