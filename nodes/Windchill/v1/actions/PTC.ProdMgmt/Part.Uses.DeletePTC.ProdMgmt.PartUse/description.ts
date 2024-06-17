import { INodeProperties } from "n8n-workflow";

export const PartUsesDeletePtcProdMgmtPartUseDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
			},
		},
		default: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
		options: [
			{
				name: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				value: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				value: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				action: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				value: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				action: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/Uses('{PartUseId}')",
				value: "DELETE /Parts('{PartId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/Uses('{PartUseId}')",
				action: "DELETE /Parts('{PartId}')/Uses('{PartUseId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				value: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				action: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
			},
		],
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartMadeFromId',
		name: 'PartMadeFromId-string(path)',
		description: 'Part Made From ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RevisionsId',
		name: 'RevisionsId-string(path)',
		description: 'Revisions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UsedById',
		name: 'UsedById-string(path)',
		description: 'Used By ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'VersionsId',
		name: 'VersionsId-string(path)',
		description: 'Versions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
];
