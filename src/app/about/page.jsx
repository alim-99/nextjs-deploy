import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Button from '@/components/Buttons/Button'

const Blog = () => {
  return (
    <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image 
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            fill={true}  alt='' className={styles.img} />
              <div className={styles.imgText}>
              <h1 className={styles.imgTitle}>Digital Storytellers</h1>
              <h2 className={styles.imgDesc}>Handcraft award winning digial experiences</h2>
            </div>
            </div>
            <div className={styles.textContainer}>
            <div className={styles.item}>
              <h1 className={styles.title}>Who Are We?</h1>
              <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque voluptate doloribus, consequatur aspernatur ipsum illum modi vero voluptates, in minima excepturi, maxime eveniet tempora dignissimos dicta minus ad unde animi debitis totam? Nisi
              <br />
              <br />
              id veritatis quod incidunt consequuntur laudantium, maxime rerum necessitatibus veniam dolorem illum consectetur exercitationem aspernatur quibusdam perspiciatis consequatur blanditiis nobis dignissimos aliquid non sequi doloribus! Eaque animi error exercitationem voluptatum atque ducimus sint magni ratione dicta adipisci cupiditate similique dignissimos aspernatur, perferendis ad numquam ipsum, fugiat iusto repellat eos consectetur, quas quia! Eius non maxime doloribus pariatur illo saepe est quos 
              </p>
            </div>
            <div className={styles.item}>
              <h1 className={styles.title}>What We Do</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet dolores provident placeat ullam quidem odio necessitatibus? Quos dolores maiores quibusdam sit doloremque ex commodi illo autem ea sunt deserunt, quia, quis a nam sequi, delectus tempore vitae laboriosam voluptate? Possimus optio in dicta dolorem nemo culpa earum modi veniam mollitia impedit eveniet suscipit, ullam voluptas dolorum quo, voluptate at ipsa repellat ipsam? Dolorem iure quis voluptas reiciendis, nemo ab aliquid perferendis cum facere quam, aut maiores esse? Hic totam corrupti, dolore deserunt quo veniam corporis aut magni voluptate soluta unde nobis velit ullam nostrum, iure tempore dignissimos? Quia, voluptatibus!
                <br />
                <br /> - Dynamic Websites
                <br />
                <br /> - Fast and Handy
                <br />
                <br /> - Mobile Apps
              </p>
              <Button url="/contact" text="Contact" />
            </div>
            </div>
    </div>
  )
}

export default Blog