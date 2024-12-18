<!DOCTYPE html>
<html dir="ltr" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    <!-- React -->
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    <!-- Styles -->
    @vite('/resources/css/app.css')
</head>

<body>
    <div id="app"></div>
</body>

</html>
