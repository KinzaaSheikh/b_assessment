import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('react-masonry-list'), {
  ssr: false,
});

const Gallery = () => {
    const items = ['Small Image.png', 'Large Image (1).png', 'Small Image (2).png', 'Large Image.png', 'Component 19 (1).png', 'Large Image (2).png', 'Component 19.png', 'Small Image (1).png', 'Component 19 (2).png',  'Component 20.png',  'Component 20 (1).png'];

    const styles = {
        masonry: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridGap: '16px',
        },
        item: {
            breakInside: 'avoid' as const, // Explicitly declare breakInside as 'avoid'
            marginBottom: '16px',
        },
        img: {
            width: '100%',
            borderRadius: '8px',

        },
    };

    return (
        <Layout className=''
            minWidth={100}
            items={items.map((item, index) => (
                <div key={index}>
                    <img
                        style={styles.img}
                        className="h-auto max-w-full rounded-lg"
                        src={`/images/${item}`}
                        alt={`Image ${index}`}
                    />
        </div>
      ))}
    ></Layout>
        // <div className='p-6 ' style={styles.masonry}>
        //     {imageNames.map((imageName, index) => (
        //         <div key={index} style={styles.item}>
        //             <img
        //                 style={styles.img}
        //                 className="h-auto max-w-full rounded-lg"
        //                 src={`/images/${imageName}`}
        //                 alt={`Image ${index}`}
        //             />
        //         </div>
        //     ))}
        // </div>
    );
}

export default Gallery;
