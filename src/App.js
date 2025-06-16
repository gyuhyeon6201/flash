import "./App.scss";
import { useState } from "react";
import mockData from "./data/mockData";
import Category from "./Components/Category";
import FlashCard from "./Components/FlashCard";
import CardLearn from "./Components/CardLearn";
import Result from "./Components/Result";

const App = () => {
    const [category, setCategory] = useState(null);
    const [learningMode, setLearningMode] = useState(false);
    const [exitMode, setExitMode] = useState(false);
    const handleCategory = (obj) => {
        setCategory(obj);
    };
    const handleLearn = (data) => {
        setLearningMode(data);
    };
    const handleExit = (mode) => {
        setExitMode(mode);
    };
    // category 정보를 가져옵니다.
    return (
        <div>
            {!category && (
                <Category
                    cardData={mockData.categories}
                    onSelected={handleCategory}
                />
            )}
            {category && !learningMode && (
                <FlashCard
                    cardData={category}
                    onSelected={handleCategory}
                    onLearn={handleLearn}
                />
            )}
            {learningMode && !exitMode && (
                <CardLearn cardData={category.flashcards} onExit={handleExit} />
            )}
            {exitMode && (
                <Result onExit={() => {
                        setCategory(null);
                        setLearningMode(false);
                        setExitMode(false);
                    }}
                />
            )}
        </div>
    );
};

export default App;
