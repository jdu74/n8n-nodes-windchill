import { INodeProperties } from "n8n-workflow";

export const FunctionGetEnumTypeConstraintWithPropertyNameDescription: INodeProperties[] = [
	{
		displayName: 'entityName',
		name: 'entityName-string(path)',
		description: 'Entity Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetEnumTypeConstraint(entityName='{entityName}',propertyName='{propertyName}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'propertyName',
		name: 'propertyName-string(path)',
		description: 'Property Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetEnumTypeConstraint(entityName='{entityName}',propertyName='{propertyName}')",
				],
			},
		},
		required: true,
	},
];
