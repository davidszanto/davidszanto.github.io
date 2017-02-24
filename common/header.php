<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="css/styles.css" type="text/css">
		<link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
	
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="http://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/header.js"></script>
		
		<style>
		.color1{
			color:<?php echo $color1;?>;
		}
		.bgcolor1{
			background-color:<?php echo $color1;?>;
		}
		.color2{
			color:<?php echo $color2;?>;
		}
		.bgcolor2{
			background-color:<?php echo $color2;?>;
		}
		
		</style>
	</head>

	<body>
		<header id="header" class="bgcolor2">			
				<h1 id="htitle" class="smalltitle color1">
					<?php echo $title;?>
				</h1>		
				<nav class="hnav">
					<a id="nava" class="nava color1" href="index.php">Kezdőlap</a>
					<a id="nava" class="nava color1" href="eco.php">Öko</a>
					<a id="nava" class="nava color1" href="food.php">Nasi</a>
					<a id="nava" class="nava color1" href="graph.php">Grafika</a>
					<a id="nava" class="nava color1" href="gift.php">Ajándék</a>
					<a id="nava" class="nava color1" href="contact.php">Kapcsolat</a>
					<a id="nava" class="nava color1" onclick="alert('Webshop jelengleg nem elérhető')" href="#webshop">Webshop<img align="center" src="imgs/cart.svg"></img></a>
				</nav>			
		</header>
		
		<?php if(!isset($header2) || $header2 != false){?>
		
		<div id="header2" class="header2 shadow bgcolor2">
			<div id="bigtitle" class="bigtitle color1"><?php echo $title;?></div>
			<div id="bigheadertext" class="bigheadertext color1">
					<br/><?php echo $slogen;?>
			</div>
		</div>
		<div onclick="goto('index.php')" class="studiologo">
			STÚDIÓ<font class="logo68">68</font>
		</div>
		<?php } ?>
		
<?php if(!isset($index)){?>		
		
		
		
<div class="main">
		
			<h1 class="color2" id="intro">Bemutatkozás</h1>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<a style="visibility:hidden;" id="prod"></a>
			<h2>LOREM IPSUM DOLOR  ............</h2>			
			<h2>LOREM IPSUM DOLOR  ............</h2>
		

			<h1 class="color2" >Termékek</h1>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>			
			<a style="visibility:hidden;" id="reference"></a>
			<h2>LOREM IPSUM DOLOR  ............</h2>			
			<h2>LOREM IPSUM DOLOR  ............</h2>
		
			<h1 class="color2">Referenciák</h1>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<a style="visibility:hidden;" id="contact"></a>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
		
			<h1 class="color2" >Kapcsolat</h1>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>			
			<h2>LOREM IPSUM DOLOR  ............</h2>
			<h2>LOREM IPSUM DOLOR  ............</h2>
			
		
		
	</div>
<?php }?>
		