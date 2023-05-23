import React from 'react';
import {Container, Card} from 'react-bootstrap';

export const About = () => {
    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Немного о себе</Card.Title>
                    <Card.Text>
                        <p>Добрый день. Меня зовут Дмитрий. Я долгое время работал техническим переводчиком в компании
                            Exxon в Хьюстоне на Сахалинских проектах. Занимался устными переводами совещаний и
                            письменными переводами технической и юридической литературы.</p>
                        <p>В свободное время увлёкся программированием и созданием сайтов, самостоятельно ознакомился с
                            HTML, CSS, JavaScript. Прошёл обучение в IT INCUBATOR-е, где в течение года изучал
                            React/Redux/TypeScript. Также прошл интенсивный курс по JAVA и SQL в Revature. Выполнял
                            индивидуальные и командные проекты, а также участвовал в стартапе. В настоящее время
                            принимаю участие в разработке проекта на Next.js/React Tool Kit/RTK Query.</p>
                        <p>Умею хорошо разбираться в технической документации и находить решения на основании аналогий с
                            имеющимися вариантами. На данном этапе все своё время посвящаю улучшению своих навыков в
                            кодировании и ознакомлении с новыми технологиями.</p>
                        <p>Прошу рассмотреть меня на позицию фронтенд-разработчика.</p>
                        <p>С уважением,
                            Дмитрий.
                        </p>
                    </Card.Text>
                    <Card.Link href="https://grammeri.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Visit
                        My GitHub Portfolio</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
};
