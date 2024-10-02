

INSERT INTO ad (title, description, owner, price, picture, location, createdAt, category_id) 
VALUES 
('Vends vélo', 'Vends vélo en bon état', 'Jean', 100, 'https://example.com/velo.jpg', 'Paris', '2024-09-27 14:00:00', 3),
('Vends voiture', 'Vends voiture en bon état', 'Jean', 1000, 'https://example.com/voiture.jpg', 'Paris', '2024-09-27 14:00:00', 1),
('Vends ordinateur', 'Vends ordinateur en bon état', 'Jean', 500, 'https://example.com/ordi.jpg', 'Paris', '2024-09-27 14:00:00', 3),
('Vends téléphone', 'Vends téléphone en bon état', 'Jean', 200, 'https://example.com/tel.jpg', 'Paris', '2024-09-27 14:00:00', 3),
('Vends table', 'Vends table en bon état', 'Jean', 50, 'https://example.com/table.jpg', 'Bordeaux', '2024-09-27 14:00:00', 3),
('Vends chaise', 'Vends chaise en bon état', 'Jean', 20, 'https://example.com/chaise.jpg', 'Bordeaux', '2024-09-27 14:00:00', 3),
('Vends canapé', 'Vends canapé en bon état', 'Jean', 100, 'https://example.com/canape.jpg', 'Bordeaux', '2024-09-27 14:00:00', 3),
('Vends lit', 'Vends lit en bon état', 'Jean', 100, 'https://example.com/lit.jpg', 'Bordeaux', '2024-09-27 14:00:00', 3),
('Vends armoire', 'Vends armoire en bon état', 'Jean', 100, 'https://example.com/armoire.jpg', 'Bordeaux', '2024-09-27 14:00:00', 3),
('Vends frigo', 'Vends frigo en bon état', 'Jean', 100, 'https://example.com/frigo.jpg', 'Lyon', '2024-09-27 14:00:00', 3),
('Vends four', 'Vends four en bon état', 'Jean', 100, 'https://example.com/four.jpg', 'Lyon', '2024-09-27 14:00:00', 3),
('Vends micro-ondes', 'Vends micro-ondes en bon état', 'Jean', 100, 'https://example.com/micro-ondes.jpg', 'Lyon', '2024-09-27 14:00:00', 3),
('Vends lave-linge', 'Vends lave-linge en bon état', 'Jean', 100, 'https://example.com/lave-linge.jpg', 'Lyon', '2024-09-27 14:00:00', 3),
('Vends sèche-linge', 'Vends sèche-linge en bon état', 'Jean', 100, 'https://example.com/seche-linge.jpg', 'Lyon', '2024-09-27 14:00:00', 3),
('Vends lave-vaisselle', 'Vends lave-vaisselle en bon état', 'Jean', 100, 'https://example.com/lave-vaisselle.jpg', 'Paris', '2024-09-27 14:00:00', 3),
('Vends aspirateur', 'Vends aspirateur en bon état', 'Jean', 100, 'https://example.com/aspirateur.jpg', 'Paris', '2024-09-27 14:00:00', 3);



INSERT INTO category (name, createdAt)
VALUES ('Voiture', '2024-09-27 14:00:00'),
       ('Vêtement', '2024-09-27 14:00:00'),
       ('Autre', '2024-09-27 14:00:00');

INSERT INTO tag (name, createdAt)
VALUES
('Voiture', '2024-09-27 14:00:00'),
('Moto', '2024-09-27 14:00:00'),
('Vélo', '2024-09-27 14:00:00'),
('Informatique', '2024-09-27 14:00:00'),
('Électronique', '2024-09-27 14:00:00'),
('Meubles', '2024-09-27 14:00:00'),
('Immobilier', '2024-09-27 14:00:00'),
('Téléphone', '2024-09-27 14:00:00'),
('Électroménager', '2024-09-27 14:00:00'),
('Livres', '2024-09-27 14:00:00'),
('Jeux vidéo', '2024-09-27 14:00:00'),
('Mode', '2024-09-27 14:00:00'),
('Sport', '2024-09-27 14:00:00'),
('Bricolage', '2024-09-27 14:00:00'),
('Musique', '2024-09-27 14:00:00'),
('Art', '2024-09-27 14:00:00'),
('Jouets', '2024-09-27 14:00:00'),
('Beauté', '2024-09-27 14:00:00'),
('Accessoires', '2024-09-27 14:00:00'),
('Animaux', '2024-09-27 14:00:00');

-- SQLite
INSERT INTO ad_tags_tag (adId, tagId)
VALUES
(1, 10),  
(1, 11),
(2, 11),  
(2, 13),
(3, 12),  
(3, 1),
(4, 13),  
(4, 16),
(5, 14), 
(5, 3),
(6, 15), 
(6, 4),
(7, 16), 
(7, 18),
(8, 17),  
(8, 3), 
(9, 18), 
(9, 6),
(10, 19), 
(10, 27),
(11, 20), 
(11, 18),
(12, 16), 
(12, 14),
(13, 11),
(13, 12),
(14, 11), 
(14, 19),
(15, 12), 
(15, 14),
(16, 16),
(16, 18); 

