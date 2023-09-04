import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef, useState } from "react";
import Rheostat from "rheostat";
import "rheostat/initialize";
const image =
  "https://upload.wikimedia.org/wikipedia/commons/8/81/Salman_Khan_filmfare.jpg";
  const lorem = `iure tempore aperiam praesentium recusandae nisi voluptatum. Tempore
  id ullam quis suscipit velit accusamus quas, delectus, fuga minus
  vero, necessitatibus esse. Animi sequi molestiae corrupti sapiente
  voluptate quos. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Soluta a labore quisquam. Facilis ratione neque distinctio
  aliquam, accusamus eveniet maiores error, eum iure tempore aperiam
  praesentium recusandae nisi voluptatum. Tempore id ullam quis suscipit
  velit accusamus quas, delectus, fuga minus vero, necessitatibus esse.
  Animi sequi molestiae corrupti sapiente voluptate quos. Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Soluta a labore quisquam.
  Facilis ratione neque distinctio aliquam, accusamus eveniet maiores
  error, eum iure tempore aperiam praesentium recusandae nisi
  voluptatum. Tempore id ullam quis suscipit velit accusamus quas,
  delectus, fuga minus vero, necessitatibus esse. Animi sequi molestiae
  corrupti sapiente voluptate quos.`
function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  // const [containerHeight, setContainerHeight] = useState("");
  // const filterRef = useRef();
  // const containerRef = useRef()
  // const [content,setContent] = useState(lorem)

  
 
  // 100 * (px/vh) 
  useEffect(() => {
   setTimeout(()=>{
    setContent("")
   },5000)

  }, []);

  useLayoutEffect(()=>{
    
    const getFilterHeight = () => {
      const vh = window.innerHeight
      let height = filterRef?.current?.getBoundingClientRect().height;
      
      // height = Math.ceil(100 * (height/vh))
      // height = `h-[${height}px] `;
      setContainerHeight(height)
      //  containerRef?.current?.style.height = height + "px"
    };
    getFilterHeight();
 
   
   
  },[content])

  return (
    <div  className="grid grid-cols-4">
      <div ref={filterRef} className={`b w-full ${content === "" ? "h-screen" : "h-max"}`}>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quia rem
          mollitia eveniet provident quibusdam voluptatibus praesentium fugit
          inventore aut consequuntur autem reiciendis ipsam vel libero
          blanditiis commodi magni ipsum officia, natus est. Exercitationem,
          nisi quod quisquam suscipit est alias sequi accusantium ea ullam
          distinctio, optio eligendi quo eum sit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta a labore quisquam. Facilis
          ratione neque distinctio aliquam, accusamus eveniet maiores error, eum
          {content}
        </div>
        {/* <Rheostat
        min={1}
        max={100}
        values={[min, max]}
        onValuesUpdated={(e) => {
          setMin(e.values[0]);
          setMax(e.values[1]);
        }}
      /> */}
        <div>
          <div className="flex space-x-2">
            <p>min</p>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className=" w-12 border"
            />
          </div>
          <div className="flex space-x-2">
            <p>max</p>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className=" w-12 border"
            />
          </div>
        </div>
      </div>

      <div ref={containerRef} style={{height: `${containerHeight}px`}} className={`${containerHeight}  overflow-y-scroll px-2  `}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id rerum ullam
        repudiandae officia necessitatibus est quam recusandae, explicabo,
        consequuntur, assumenda numquam eveniet! Blanditiis explicabo inventore
        aliquid nulla deleniti dolorem iusto nihil harum laboriosam est repellat
        quo iste, sequi quis corporis suscipit eum. Ipsum neque dignissimos
        perspiciatis dolorem cum nihil magni aliquam ad dolores culpa aperiam,
        vero provident minima, doloremque beatae eius at mollitia ut pariatur
        labore possimus, eveniet aspernatur temporibus laboriosam. Placeat
        libero nemo at debitis autem eos soluta reprehenderit magni cupiditate
        ipsam deserunt nostrum hic, quis sequi mollitia laboriosam obcaecati
        dolorum nulla, dignissimos quasi inventore! Autem laborum facilis quasi
        minima eveniet quos exercitationem sapiente aliquid impedit omnis? Nam
        facilis sint impedit autem odio minus doloremque alias doloribus
        dolorum! Aut nostrum consequuntur animi ducimus tempore a, veritatis
        fuga voluptas sunt ullam id beatae culpa minus illo itaque totam
        voluptatibus quaerat sed molestias fugiat deserunt. Iure atque
        voluptatum quisquam vel labore rerum officiis officia incidunt
        architecto, itaque placeat accusamus aliquam numquam soluta, minus
        libero a impedit beatae ratione harum nulla delectus sed. Dolore, ea.
        Enim veniam, accusamus nam necessitatibus, quibusdam delectus omnis
        recusandae nobis reiciendis quis ratione porro ex alias vero
        exercitationem reprehenderit fuga dicta esse sed qui adipisci. Ducimus
        perferendis sequi explicabo nemo placeat consequuntur deleniti,
        consequatur iusto incidunt sed cumque voluptatum! Mollitia quo neque non
        deserunt veniam harum, dolores voluptas nulla molestiae magni doloribus
        amet assumenda consectetur quisquam, natus enim. Dolores nobis, facilis
        accusamus eos error at nihil nesciunt, neque reprehenderit provident ab
        perferendis tempore numquam rerum veniam, consectetur delectus earum
        quas. Maxime quas officia repudiandae amet, aut, aliquam illum
        repellendus corrupti quidem omnis cupiditate exercitationem. Nobis neque
        est, voluptatum consequuntur inventore dolorem culpa iure repudiandae,
        repellat id, animi reprehenderit officia. Temporibus qui, aspernatur
        perspiciatis quam eius quibusdam nihil saepe soluta placeat ex,
        doloremque iusto voluptates voluptatibus veniam recusandae provident
        debitis nam maiores at rem libero sed deleniti ea ullam. Magnam quam,
        odio repellat eius laboriosam quia id officiis suscipit praesentium
        dolore dolores eaque officia esse quae cupiditate ipsum, modi enim
        reprehenderit alias inventore natus vel aut nesciunt. Deleniti, hic
        accusantium voluptates suscipit est ipsum voluptatem non tempore facilis
        accusamus dolorem placeat, mollitia, nesciunt reprehenderit deserunt eos
        dolores officiis eligendi distinctio. Sapiente, iusto? Eligendi quaerat,
        excepturi ullam magni reiciendis recusandae ut molestias quod soluta
        reprehenderit quos enim iusto iure id dignissimos ducimus fugiat error
        dolor, veniam praesentium rerum sint? Nemo aliquid, harum quas
        voluptatum modi odio doloremque corrupti amet dolorum nesciunt excepturi
        aliquam autem minima blanditiis sed distinctio deserunt eum debitis, sit
        tenetur animi. Dolores, iusto! Impedit iste laborum sapiente blanditiis
        harum sit quam vero laudantium inventore porro quas, voluptas maxime,
        voluptates totam in, aut doloremque error reiciendis aliquam ipsa. Totam
        veritatis cumque corporis, atque dicta esse eveniet facere voluptatem
        aperiam cupiditate nostrum at nam ut a ad corrupti! Accusantium neque
        natus doloremque ex dicta consequuntur, saepe odit hic laudantium iure,
        voluptatum, dolorem vitae ipsam? Iste qui molestiae beatae laudantium
        est! Quas qui a sequi dicta eius aspernatur temporibus distinctio
        excepturi, sed, ex quis labore asperiores eos delectus fugiat!
      </div>
    </div>
  );
}

export default App;
