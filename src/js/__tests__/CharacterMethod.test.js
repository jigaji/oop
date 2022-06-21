import Bowerman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';

test('Метод levelUp повышает уровень на 1 и повышает показатели health, attack, deffence', () => {
  const recieved = new Daemon('Lucifer', 'Daemon');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Magician('Gendalf', 'Magician');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('Нельзя повысить уровень умершего!');
});

test('Метод damage(points) меняет внутреннее состояние объекта(нанесение урона)', () => {
  const recieved = new Bowerman('Frank', 'Bowman');
  recieved.damage(2);
  const result = {
    name: 'Frank',
    type: 'Bowman',
    health: 98.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toEqual(result);
});

test('Метод damage(points) не должен изменять значения, если health = 0', () => {
  const recieved = new Swordsman('Gerald', 'Swordsman');
  recieved.health = 0;
  const result = {
    name: 'Gerald',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test('при health < 0 метод damage(points) должен уствновить health = 0', () => {
  const recieved = new Zombie('Necroman', 'Zombie');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});
