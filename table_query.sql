-- Create arrest table (1)
CREATE TABLE arrests (
	arrest_id VARCHAR(255),
	year INT,
	month VARCHAR(255),
	arrest_type VARCHAR(255),
	arrest_charge VARCHAR(255),
	ward VARCHAR(255),
	division VARCHAR(255),
	arrestee_race VARCHAR(255),
	arrestee_sex VARCHAR(255)
);

-- Create budget table (2)
CREATE TABLE budget (
	expenditures VARCHAR(255),
	actual_fy_18_19 MONEY,
	adopted_fY_19_20 MONEY,
	estimated_fy_19_20 MONEY,
	adopted_fy_20_21 MONEY
);

SELECT * FROM budget