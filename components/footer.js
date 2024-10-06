const footer = document.getElementById("footer");

const footerElement = document.createElement("div");

footerElement.className = "footer";

footerElement.innerHTML = `
    <div class="footer-content">
                <!-- left-footer -->
                <div class="footer-content-details">
                    <div class="left-footer-content">
                        <h1>About</h1>
                        <p>Melodies is a website that has been created for over <span>5 year’s</span> now and it is
                            one of the most famous music player website’s in the world. in this website you can
                            listen and download songs for free. also of you want no limitation you can buy our <a href="#">premium
                                pass’s.</a></p>
                    </div>
                    <!-- center-footer -->
                    <div>
                        <table class="table_content">
                            <tr>
                                <th>Melodi</th>
                                <th>Acess </th>
                                <th>Contact</th>
                            </tr>
                            <tr>
                                <td><a style="text-decoration:none" href="#">Songs</a></td>
                                <td><a style="text-decoration:none" href="#">Explore</a></td>
                                <td><a style="text-decoration:none" href="#">About</a></td>
                            </tr>
                            <tr>
                                <td><a style="text-decoration:none" href="#">Radio</a></td>
                                <td><a style="text-decoration:none" href="#">Artists</a></td>
                                <td><a style="text-decoration:none" href="#">Policiy</a></td>
                            </tr>
                            <tr>
                                <td><a style="text-decoration:none" href="#">Podcast</a></td>
                                <td><a style="text-decoration:none" href="#">Playlists</a></td>
                                <td><a style="text-decoration:none" href="#">Social Media</a></td>
                            </tr>
                            <tr>
                                <td><a style="text-decoration:none" href="#"></a></td>
                                <td><a style="text-decoration:none" href="#">Albums</a></td>
                                <td><a style="text-decoration:none" href="#">Soppurt</a></td>
                            </tr>
                            <tr>
                                <td><a style="text-decoration:none" href="#"></a></td>
                                <td><a style="text-decoration:none" href="#">Trendings</a></td>
                                <td><a style="text-decoration:none" href="#"></a></td>
                            </tr>
                        </table>
                    </div>
                    <!-- right-footer -->
                    <div class="contact"> 
                        <p class="Logo">Melodies</p>
                        <div class="link">
                            <img src="./image/footer/background/fb.svg">
                            <img src="./image/footer/background/ig.svg">
                            <img src="./image/footer/background/tw.svg">
                            <img src="./image/footer/background/call.svg">
                        </div>
                    </div>
                </div>
            </div>
`;

footer.appendChild(footerElement);
