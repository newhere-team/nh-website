<!doctype html>
<html ng-app="app"
      ng-strict-di>
    <head>

        <!-- Google Analytics -->
        <script>
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', "{!! Config::get('services.analytics.key') !!}", 'auto');
        </script>
        <script async src='https://www.google-analytics.com/analytics.js'></script>

        <meta http-equiv="X-UA-Compatible"
              content="IE=edge">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet"
              href="{!! elixir('css/vendor.css') !!}">
        <link rel="stylesheet"
              href="{!! elixir('css/app.css') !!}">
	    <link rel="stylesheet"
			href="{!! elixir('css/tinymcs_custom.css') !!}">
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700'
              rel='stylesheet'
              type='text/css'>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <!-- <link rel="stylesheet" href="https://npmcdn.com/lrm-mapzen/dist/leaflet.routing.mapzen.css"> -->
        <meta name="apple-mobile-web-app-capable"
              content="yes">
        <meta name="mobile-web-app-capable"
              content="yes">
        <title>new here : welcome</title>

    <script src="{!! elixir('js/vendor.js') !!}"></script>
	<script src="{!! elixir('js/partials.js') !!}"></script>
	<script src="{!! elixir('js/app.js') !!}"></script>

        <script type="text/javascript">
            window.newhere =
                {
                	// doing this so tinymce can use the same css
                    // css names are "random" due to elixier/gulp
                    // so when they change the user browser flushes the cache

                	css: [
                        "{!! elixir('css/tinymcs_custom.css') !!}",
                        "https://fonts.googleapis.com/icon?family=Material+Icons",
                        'https://fonts.googleapis.com/css?family=Lato:300,400,700'
                    ]
                }
        </script>

        <!--[if lte IE 10]>
        <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
        <![endif]-->
    </head>
    <body>
        <div ui-view="front"></div>

        {{--livereload--}}
        @if ( env('APP_ENV') === 'local' )
            <script type="text/javascript">
				document.write( '<script src="' + location.protocol + '//' + (location.host.split( ':' )[0] || 'localhost') + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>' )
            </script>
        @endif
    </body>
</html>
