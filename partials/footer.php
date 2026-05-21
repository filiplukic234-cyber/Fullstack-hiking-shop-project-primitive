<footer>
    <section class="subscribe">
        <h3>Subscribe on Hiking shop now!</h3>
        <p class="loremSubscribe">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br> Fuga accusantium labore
            voluptatum laudantium
            id, rem optio nemo minus voluptatibus voluptas.
        </p>
        <input type="email" placeholder="Your email" class="emailInput">
        <button type="submit" class="contactButton">Subscribe!</button>
    </section>


    <article class="container">
        <a href="" class="hiking-shop">
            <h2><i class="fas fa-hiking"></i> Hiking shop</h2>
        </a>
        <?php include 'partials/nav.php' ?>
        <div class="icons">
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-pinterest"></i></a>
        </div>
    </article>

    <article class="hiking-shop">
        <p>&copy; Hiking shop 2021.</p>
    </article>
</footer>

<?php if (!empty($scripts)): ?>
    <?php foreach ($scripts as $script): ?>
        <script src="<?= './js/'.$script ?>"></script>
    <?php endforeach; ?>
<?php endif; ?>

</body>

</html>