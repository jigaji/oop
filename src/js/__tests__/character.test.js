import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new Character('Will', 'Fairy');
    return result;
  }).toThrow();
});

test('creation Bowman', () => {
  const recieved = new Bowman('Frank', 'Bowman');
  expect(recieved).toEqual({
    name: 'Frank',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('creation Daemon', () => {
  const recieved = new Daemon('Lucifer', 'Daemon');
  expect(recieved).toEqual({
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('creation Magician', () => {
  const recieved = new Magician('Gendalf', 'Magician');
  expect(recieved).toEqual({
    name: 'Gendalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('creation Swordsman', () => {
  const recieved = new Swordsman('Geralt', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Geralt',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('creation Undead', () => {
  const recieved = new Undead('Lich', 'Undead');
  expect(recieved).toEqual({
    name: 'Lich',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('creation Zombie', () => {
  const recieved = new Zombie('Necroman', 'Zombie');
  expect(recieved).toEqual({
    name: 'Necroman',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
