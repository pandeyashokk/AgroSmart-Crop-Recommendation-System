function showCrop(crop) {
    const cropInfo = document.getElementById("cropInfo");
    let content = "";

    if (crop === "apple"){
        content = `
              <h2>Apple Cultivation</h2>
              <h3>1. Introduction</h3>
              <p>Overview of Apples: Apples(Malus domestica) are one of the most popular fruits worldewide, appreciated for their taste, versatility and nutritional value.
              They grow best in temperate climates and can be cultivated in various soil types.
              <h3>2. Materials and Resources Required</h3>
              <ul>
              <li><strong>Planting Material:</strong> Quality apple tree seedlings or grafted varieties from reputable nurseries.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
              <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
              </ul>
              <h3>3. For Cultivating Apple</h3>
              <div style="overflow-x: auto;">
              <table>
                <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>120-145</td>
                    <td>195-205</td>
                    <td>21-24</td>
                    <td>90-95</td>
                    <td>5.5-6.5</td>
                    <td>100-125</td>
                </tr>
                </div>
                `;
    }
    if (crop === "banana") {
      content = `
              <h2>Banana Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Bananas: Bananas (Musa spp.) are tropical fruits renowned for their sweet flavor and nutritional benefits. They thrive in warm, humid climates and are cultivated worldwide for both commercial and home production.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Healthy banana suckers or tissue-cultured plantlets.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic matter such as compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation systems for adequate moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides to manage pests and diseases.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            <h3>3. For Cultivating Banana</h3>
            <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>80-120</td>
                    <td>70-95</td>
                    <td>45-55</td>
                    <td>25-30</td>
                    <td>75-85</td>
                    <td>5.5-6.5</td>
                    <td>90-120</td>
                </tr>
                </div>
                `;
    }
    if (crop === "cabbage") {
        content = `
                <h2>Cabbage Cultivation</h2>
                <h3>1. Introduction</h3>
                <p>Overview of Cabbage: Cabbage (Brassica oleracea var. capitata) is a leafy green, red, or white vegetable commonly grown in temperate climates. It is highly nutritious and widely used in culinary applications worldwide.</p>
                <h3>2. Materials and Resources Required</h3>
                <ul>
                <li><strong>Planting Material:</strong> Quality cabbage seedlings or seeds from reputable nurseries and trusted suppliers.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or sprinkler irrigation for effective moisture management.</li>
              <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, sprinkler) or tractors for planting, maintenance, and harvesting.</li>
                </ul>
                <h3>3. For Cultivating Cabbage</h3>
                <div style="overflow-x: auto;">
                <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>80-120</td>
                    <td>15-40</td>
                    <td>25-35</td>
                    <td>23-28</td>
                    <td>50-70</td>
                    <td>6-7.5</td>
                    <td>115-200</td>
                </tr>
                </div>
                `;
    }
    if (crop === "cauliflower") {
      content = `
              <h2>Cauliflower Cultivation</h2>
              <h3>1. Introduction</h3>
              <p>Overview of Cauliflower: Cauliflower (Brassica oleracea var. botrytis) is a cool-season vegetable known for its edible white curd. It requires specific temperature conditions and proper care to produce high yields.</p>
              <h3>2. Materials and Resourcrs Required</h3>
              <ul>
                <li><strong>Planting Material:</strong> Quality cauliflower seedlings or seeds from reputable nurseries and trusted suppliers.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses irrigation for effective moisture management.</li>
              <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoses) or tractors for planting, maintenance, and harvesting.</li>
                </ul>
              <h3>3. For Cultivating Cauliflower</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>60-100</td>
                    <td>35-60</td>
                    <td>35-45</td>
                    <td>23-27</td>
                    <td>70-90</td>
                    <td>6-7.5</td>
                    <td>150-200</td>
                </tr>
                </div>
                `;
    }
    if (crop === "chickpea") {
        content = `
                <h2>Chickpea Cultivation</h2>
                <h3>1. Introduction</h3>
                <p>Overview of Chickpea: Chickpea (Cicer arietinum) is a popular legume grown for its protein-rich seeds, used widely in food production.</p>
            
                <h3>2. Materials and Resources Required</h3>
                <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant chickpea seeds (desi or kabuli types).</li>
                <li><strong>Fertilizers:</strong> Primarily phosphorus; minimal nitrogen since chickpeas fix their own nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation for dry conditions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for common chickpea pests.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and sprayers for pest control.</li>
                </ul>
                <h3>3. For Cultivating Chickpea</h3>
                <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>20-60</td>
                    <td>35-60</td>
                    <td>35-45</td>
                    <td>23-27</td>
                    <td>70-90</td>
                    <td>6-7.5</td>
                    <td>150-200</td>
                </tr>
                </div>
                   
                `;
    }
    if (crop === "cotton") {
      content = `
               <h2>Cotton Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Cotton: Cotton is a major fiber crop valued for its soft, fluffy fibers used in textiles.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified cotton seeds (e.g., Bt cotton or other pest-resistant varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium, and micronutrient fertilizers.</li>
                <li><strong>Irrigation System:</strong> Drip or furrow irrigation for dry regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common cotton pests.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and sprayers for pest control.</li>
            </ul>
            <h3>3. For Cultivating Cotton</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>100-140</td>
                    <td>35-60</td>
                    <td>15-25</td>
                    <td>22-26</td>
                    <td>75-85</td>
                    <td>5.8-8</td>
                    <td>60-100</td>
                </tr>
                </div>
               
                `;
    }
    if (crop === "kodo") {
        content = `
                <h2>Kodo Cultivation</h2>
                <h3>1. Introduction</h3>
                <p>Overview of Millet: Millet(kodo) is a group of small-seeded grasses cultivated as cereal crops or grains for human consumption and animal feed. It is highly drought-resistant and thrives in arid and semi-arid regions. Millets are rich in nutrients, gluten-free, and provide essential minerals like iron, calcium, and magnesium.</p>
                <h3>2. Materails and Resouces Required</h3>
                <ul>
                <li><strong>Seeds:</strong> High-quality, certified millet seeds sourced from certified suppliers.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium, also organic compost, and manureand micronutrient fertilizers.</li>
                <li><strong>Irrigation System:</strong> Drip irrigation systems or sprinklers for efficient water use and proper drainage system.</li>
                <li><strong>Pest Control:</strong>Insecticides and pesticides to manage common millet pests and diseases.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and seed drills and threshers for large scale farming.</li>
                </ul>
                <h3>3. For Cultivating Kodo</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>80-120</td>
                    <td>5-30</td>
                    <td>45-55</td>
                    <td>24-27</td>
                    <td>80-90</td>
                    <td>6-7</td>
                    <td>40-60</td>
                </tr>
                </div>
                `;
    }
    if (crop === "maash ko daal") {
      content = `
               <h2>Black Gram Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Black Gram: Black gram (Vigna mungo) is a highly nutritious legume valued for its high protein content and is widely used in various culinary dishes especially in Nepal.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant black gram seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; minimal nitrogen is needed as black gram plants can fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation systems, particularly in regions with inconsistent rainfall.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            <h3>3. For Cultivating Black Gram</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>20-60</td>
                    <td>55-80</td>
                    <td>15-25</td>
                    <td>25-35</td>
                    <td>60-70</td>
                    <td>6.5-7.7</td>
                    <td>60-75</td>
                </tr>
                </div>
                `;
    }
    if (crop === "maize") {
        content = `
                  <h2>Maize Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Maize: Maize (Zea mays), also known as corn, is a key cereal crop widely cultivated for its grains.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified maize seeds (e.g., hybrid or improved open-pollinated varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Machinery:</strong> Tractor or hand tools for field preparation and planting.</li>
                <li><strong>Pest Control:</strong> Herbicides and insecticides specific to common maize pests and weeds.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, if rainwater is insufficient.</li>
            </ul>
            <h3>3. For Cultivating Maize</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>60-100</td>
                    <td>35-60</td>
                    <td>15-25</td>
                    <td>18-27</td>
                    <td>55-75</td>
                    <td>5.5-7</td>
                    <td>60-110</td>
                </tr>
                </div>
                `;
    }
    if (crop === "mung ko daal") {
      content = `
               <h2>Mung Bean Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Mung Beans: Mung beans (Vigna radiata) are small, green legumes highly valued for their nutritional content and culinary versatility.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant mung bean seeds.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, and potassium; mung beans generally fix their own nitrogen, so low nitrogen application is sufficient.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, especially in drier regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            <h3>3. For Cultivating Mung Beans</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>35-60</td>
                    <td>15-25</td>
                    <td>27-30</td>
                    <td>80-90</td>
                    <td>6-7.2</td>
                    <td>36-60</td>
                </tr>
                </div>
                `;
    }
    if (crop === "musuro ko daal") {
        content = `
                 <h2>Musuro Ko Daal Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Lentils: Lentils (Lens culinaris) are nutritious legumes known for their high protein and fiber content. They are widely cultivated for food and are a staple in many cuisines mainly in the context of Nepal.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant lentil seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; nitrogen application is minimal as lentils can fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation systems for moisture management.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            <h3>3. For Cultivating Musuro Ko Daal</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>55-80</td>
                    <td>15-25</td>
                    <td>18-30</td>
                    <td>60-70</td>
                    <td>5.9-7.8</td>
                    <td>35-55</td>
                </tr>
                </div>
                `;
    }
    if (crop === "orange") 
      content = `
               <h2>Orange Cultivation</h2>

                <h3>1. Introduction</h3>
                <p>Overview of Oranges: Oranges (Citrus sinensis) are one of the most popular citrus fruits, valued for their sweet, juicy flesh and high vitamin C content. They thrive in warm, subtropical to tropical climates.</p>

                    <h3>2. Materials and Resources Required</h3>
                <ul>
                    <li><strong>Planting Material:</strong> Quality orange tree seedlings or grafted varieties from reputable nurseries.</li>
                    <li><strong>Fertilizers:</strong> Citrus-specific fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
                    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for efficient moisture management.</li>
                    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
                </ul>
            <h3>3. For Cultivating Orange</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>5-30</td>
                    <td>5-15</td>
                    <td>10-35</td>
                    <td>90-95</td>
                    <td>6-8</td>
                    <td>100-120</td>
                </tr>
                </div>         
                `;
    
    if (crop === "papaya") {
        content = `
                 <h2>Papaya Cultivation</h2>
                 <h3>1. Introduction</h3>
                 <p>Overview of Papayas: Papayas (Carica papaya) are tropical fruit trees known for their sweet, juicy flesh and vibrant orange color. They thrive in warm climates and can produce fruit year-round under optimal conditions.</p>
                 <h3>2. Materials and Resources Required</h3>
                 <ul>
                 <li><strong>Planting Material:</strong> Quality papaya seeds or seedlings from reputable nurseries.</li>
                 <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic compost.</li>
                 <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
                 <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                 <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
                 </ul>
                 <h3>3. For Cultivating Papaya</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>31-70</td>
                    <td>46-70</td>
                    <td>45-55</td>
                    <td>23-44</td>
                    <td>90-95</td>
                    <td>6.5-7</td>
                    <td>40-248</td>
                </tr>
                </div>
              
                `;
    }
    if (crop === "pomegranate") {
      content = `
               <h2>Pomegranate Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Pomegranates: Pomegranates (Punica granatum) are nutritious fruits known for their health benefits and vibrant flavor. They are cultivated in many parts of the world and thrive in warm climates.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds or Seedlings:</strong> High-quality pomegranate seeds or healthy seedlings from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium.</li>
                <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or furrow irrigation.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides for managing pests and diseases.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for planting, pruning, and maintenance.</li>
            </ul>
            <h3>3. For Cultivating Pomegranate</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>5-30</td>
                    <td>35-45</td>
                    <td>18-25</td>
                    <td>85-95</td>
                    <td>5.5-7.2</td>
                    <td>102-112</td>
                </tr>
                </div>
                `;
    }
    if (crop === "rahar ko daal") {
        content = `
                <h2>Rahar ko Daal Cultivation</h2>
                <h3>1. Introduction</h3>
                <p>Overview of Split yellow pigeon peas: Split yellow pigeon peas (Cajanus cajan) are a widely consumed legume, rich in protein, fiber, and essential minerals such as iron and potassium. They are commonly used in various culinary dishes, particularly in South Asian and African cuisines. Pigeon peas are highly drought-resistant and thrive in tropical and subtropical climates with well-drained soil.</p>
                <h3>2. Materials and Resources Required</h3>
                <ul>
                <li><strong>Planting Material:</strong> Quality pigeon pea seeds or seedlings from reputable nurseries and trusted suppliers.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium and organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses irrigation for effective moisture management.</li>
              <li><strong>Pest Control:</strong> Use of Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (hoses, rakes and trowels) or tractors for planting, maintenance, and harvesting for large farming areas.</li>
                </ul>
                <h3>3. For Cultivating Rahar Ko Daal</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>55-80</td>
                    <td>15-25</td>
                    <td>18-37</td>
                    <td>30-70</td>
                    <td>4.5-7.5</td>
                    <td>90-198</td>
                </tr>
                </div>
               
                `;
    }
    if (crop === "rajma") {
      content = `
              <h2>Rajma Cultivation</h2>
              <h3>1. Introduction</h3>
              <p>Kidney beans (Phaseolus vulgaris) are a popular legume known for their high protein and fiber content. They are widely used in various cuisines and provide essential nutrients such as iron, potassium, and folate. Kidney beans thrive in warm climates and well-drained, loamy soil with adequate sunlight.</p>
              <h3>2. Materials and Resources Required</h3>
              <ul>
                <li><strong>Seeds or Seedlings:</strong> High-quality seedlings or seeds from trusted suppliers.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium and organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or soaker hoses irrigation for effective moisture management.</li>
              <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoses) or tractors, seed drills for planting on large fields.</li>
                </ul>
              <h3>3. For Cultivating Rajma</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>55-80</td>
                    <td>15-25</td>
                    <td>15-25</td>
                    <td>18-25</td>
                    <td>5.5-6</td>
                    <td>60-150</td>
                </tr>
                </div>
                `;
    }
    if (crop === "rice") {
        content = `
            <h2>Rice Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Rice: Rice (Oryza sativa) is a staple food crop in many parts of the world. It is the main food in all over Nepal.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified rice seeds.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Irrigation System:</strong> Flooding or controlled water supply setup.</li>
                <li><strong>Machinery:</strong> Tractors, transplanting machines (optional), sickles for manual harvesting.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common rice pests and weeds.</li>
            </ul>
            <h3>3. For Cultivating Rice</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>60-100</td>
                    <td>35-60</td>
                    <td>35-45</td>
                    <td>20-27</td>
                    <td>80-85</td>
                    <td>5-7.8</td>
                    <td>182-300</td>
                </tr>
                </div>
                `;
    }
    if (crop === "tomato") {
      content = `
              <h2>Tomato Cultivation</h2>
              <h3>1. Introduction</h3>
              <p>Overview of Tomato: Tomatoes (Solanum lycopersicum) are one of the most widely grown and consumed vegetables worldwide. They are valued for their rich flavor, versatility in cooking, and high nutritional content, including vitamins A, C, and antioxidants. Tomatoes thrive in warm climates and can be cultivated in various soil types with proper care.</p>
              <h3>2. Materials and Resources Required</h3>
              <ul>
              <li><strong>Planting Material:</strong> High-quality tomato seeds or seedlings from reputable nurseries.</li>
              <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium and organic compost.</li>
              <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or soaker hoses for efficient water distribution.</li>
              <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
              <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoses) for planting, high-scale mechanized equipment for large-scale farming and harvesting.</li>
              </ul>
              <h3>3. For Cultivating Tomato</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>5-30</td>
                    <td>25-35</td>
                    <td>25-30</td>
                    <td>90-100</td>
                    <td>5.5-6.5</td>
                    <td>131-225</td>
                </tr>
                </div>
                 
                `;
    }
    if (crop === "wheat") {
        content = `
                <h2>Wheat Cultivation</h2>
                <h3>1. Introduction</h3>
                <p>Overview of Wheat: Wheat (Triticum spp.) is one of the most widely grown cereal crops worldwide and serves as a staple food for billions of people. It thrives in temperate regions with moderate rainfall and well-drained soils. Wheat is a rich source of carbohydrates, proteins, and essential nutrients, making it a crucial crop for global food security.</p>
                <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds or Seedlings:</strong> High-quality, certified wheat seeds varieties based on climate and soil type.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers containing Nitrogen, phosphorus, potassium and organic compost.</li>
                <li><strong>Irrigation System:</strong> Flooding or controlled water supply setup and drainage system.</li>
                <li><strong>Machinery and Tools:</strong> Tractors, transplanting machines (optional), sickles, hoes and shovels for manual harvesting.</li>
                <li><strong>Pest Control:</strong> Herbicides, insecticedes and pesticides specific to manage common wheat pests and diseases.</li>
            </ul>
                <h3>3. For Cultivating Wheat</h3>
              <div style="overflow-x: auto;">
              <table>
                    <tr>
                    <th>Nitrogen</th>
                    <th>Phosphorus</th>
                    <th>Potassium</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>pH</th>
                    <th>Rainfall</th>
                </tr>
                <tr>
                    <td>0-40</td>
                    <td>15-40</td>
                    <td>25-30</td>
                    <td>27-36</td>
                    <td>45-55</td>
                    <td>4.5-6.9</td>
                    <td>89-100</td>
                </tr>
                </div>
                `;
    }
    cropInfo.innerHTML = content;
  cropInfo.style.display = content ? "block" : "none";
}