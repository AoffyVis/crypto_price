import React from "react";
import { Box } from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Link } from "react-router-dom";

function PageAbout() {
  return (
    <Box
      sx={{
        maxWidth: 1280,
        width: "100%",
        minHeight: "75vh",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        p: 3,
        mt: 2,
        position: "relative",
      }}
    >
      <Link to="/">
        <FastRewindIcon
          sx={{
            position: "absolute",
            width: 50,
            height: 50,
            left: 50,
            fill: "#3293f0",
            cursor: "pointer",
            "&.MuiSvgIcon-root:hover": {
                fill: "#000"
            }
          }}
        />
      </Link>
      <h1 style={{ textAlign: "center", color: "#3293f0", marginBottom: "16px" }}>Page About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque, nostrum, repellat expedita officiis mollitia vitae cum quod pariatur cupiditate voluptate consequatur ea, debitis aperiam sapiente et totam! Quo laboriosam sint autem repudiandae sequi, sunt, architecto veniam maiores ab assumenda voluptates non minus ducimus quisquam expedita exercitationem reiciendis molestiae? Numquam, ad illum. Veritatis optio at quibusdam iusto? Provident, harum iusto, sit mollitia pariatur, minima placeat eveniet obcaecati labore tenetur soluta aut inventore quo possimus perferendis praesentium assumenda officia necessitatibus quasi! Ea ipsum, optio aliquam quasi temporibus enim ducimus doloribus omnis amet cumque doloremque illum atque iste labore veritatis delectus dicta velit. Distinctio aspernatur suscipit eligendi vel, quibusdam similique quis debitis. Vel quaerat laborum consequuntur tempora doloremque nostrum ab illo vero soluta a. Possimus, eligendi hic quos quam earum tempora ex nostrum amet libero ducimus magnam quo ipsam. Voluptatum, eaque doloremque. Excepturi quas, molestiae at incidunt odio ullam itaque quibusdam optio libero accusamus, aperiam eligendi esse autem totam, nihil animi praesentium ducimus maiores tempore! Error harum quo blanditiis delectus aliquid laudantium. Illo ducimus, quae nemo dolore saepe veniam est odit, fugiat cupiditate dolor harum ullam! Officia soluta suscipit placeat culpa nobis ducimus temporibus reprehenderit nam cumque, qui cum molestias dolor consequuntur voluptates porro laboriosam, laborum veritatis alias distinctio minus beatae praesentium facere aliquid reiciendis! Inventore, asperiores, alias odit nulla corporis facere quaerat maiores quibusdam nisi nostrum laboriosam aperiam assumenda. Possimus eum sunt culpa nesciunt ratione distinctio voluptas, praesentium vero. Assumenda quisquam repellendus, magni unde tenetur qui suscipit hic sapiente quasi nihil alias repudiandae totam quo neque vero consectetur at! Dolor enim beatae quod? Odio eligendi iure amet eveniet rem inventore cumque! Beatae maxime ipsum illo odio, mollitia dignissimos aspernatur architecto rem hic iste ut odit quod et quos iure distinctio provident optio! Illo voluptatem eos delectus sit nesciunt id obcaecati deleniti asperiores nihil, sunt cum. Harum at pariatur illum repudiandae facilis delectus odit, accusamus dolorum, nostrum fuga saepe, nihil amet quasi fugit eius libero non quisquam! Possimus, suscipit quidem? Doloremque maxime deserunt ea exercitationem numquam veniam ut atque, unde nihil eligendi ex sequi facere aspernatur temporibus nostrum ad veritatis! Provident eaque quasi iusto labore laboriosam culpa omnis, error ratione saepe itaque maiores dolor mollitia aliquid, voluptatem voluptatum praesentium? Exercitationem quasi natus suscipit provident quisquam dolorum sapiente. Corporis quaerat assumenda illo et veniam optio repudiandae ipsum animi nostrum laudantium, debitis enim id iure officia commodi expedita, rem tempora, rerum sunt qui odio aut sapiente. Quo obcaecati eaque fugiat suscipit sit voluptatibus voluptatem quibusdam culpa nam blanditiis. Sit unde fugiat consequuntur dolorem, earum beatae omnis. Earum quis labore ut necessitatibus, adipisci exercitationem quaerat reprehenderit aliquid illo. Similique possimus modi illum officia perferendis, commodi voluptas, odio in quae eligendi eius soluta illo consectetur quod iste laborum placeat dolor temporibus, porro optio repellendus accusamus doloribus accusantium eos. Recusandae, ratione eaque ab, officiis in omnis fugit error a ullam atque necessitatibus laborum cumque! Temporibus, quos facere enim hic quis debitis consectetur magni soluta sit, impedit neque similique doloribus atque magnam quibusdam, perspiciatis doloremque ipsa illo a.</p>
    </Box>
  );
}

export default PageAbout;
