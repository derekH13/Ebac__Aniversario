let e=200;const t=document.getElementById("timer"),o=setInterval(()=>{e>0?(t.textContent=`25d 3h ${e}seg`,e--):(clearInterval(o),t.textContent="Tempo esgotado!")},1e3);document.querySelector("#formulario").addEventListener("submit",function(e){console.log("fov"),e.preventDefault();let t=document.querySelector("#nome").value,o=document.querySelector("#Email").value,n=document.querySelector("#Observacoes").value,r=document.querySelector("#corpo");r.innerHTML+=`
        <tr>
            <td>${t}</td>
            <td>${o}</td>
            <td>Sim</td>
            <td>${n}</td>
        </tr>
    `});
//# sourceMappingURL=index.3b8eeb62.js.map
